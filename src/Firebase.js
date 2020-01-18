import firebase from "firebase"
import firebaseConfig from "./assets/firebaseConfig.json"

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const firestore = firebase.firestore()

const resumeItems = firestore.collection("resumeItems")
const foodPosts = firestore.collection("food")

async function getResumeItems () {
	const snapshot = await resumeItems.get()
	if (snapshot.empty) {
		return null
	} 
	return snapshot.docs.map(doc => {
		const result = doc.data()
		if (result.date) {
			result.date = result.date.toDate()
		}
		if (result.start) {
			result.start = result.start.toDate()
		}
		if (result.end) {
			result.end = result.end.toDate()
		}
		return result
	})
}

async function getFoodPosts () {
	const snapshot = await foodPosts.get()
	return !snapshot.empty ? snapshot.docs.map(doc => {
		const result = {
			title: doc.get("title"),
			thumbnail: doc.get("thumbnail"),
			date: doc.get("date").toDate(),
			id: doc.id
		}
		return result
	}) : null
}

async function getFoodPostById (id) {
	const snapshot = await foodPosts.doc(id).get()
	const result = snapshot.data()
	result.date = result.date.toDate()
	return result
}

export { getResumeItems, getFoodPosts, getFoodPostById } 

