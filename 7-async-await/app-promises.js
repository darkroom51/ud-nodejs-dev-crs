const users = [
	{
		id: 1,
		name: 'Andrew',
		schoolId: 101
	},
	{
		id: 2,
		name: 'Jessica',
		schoolId: 999
	}
]

const grades = [
	{
		id: 1,
		schoolId: 101,
		grade: 86
	},
	{
		id: 2,
		schoolId: 999,
		grade: 100
	},
	{
		id: 3,
		schoolId: 101,
		grade: 80
	}
]

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => {
			return user.id === id;
		})

		if (user) {
			resolve(user);
		} else {
			reject(`Unable to find user with id ${id}`);
		}
	})
}

const getGrades = (schoolId) => {
	return new Promise((resolve, reject) => {
		resolve(grades.filter((grade) => grade.schoolId === schoolId));
	});
}

// Andrew has 83% in the class
const getStatus = (userId) => {
	let user;
	return getUser(userId)
		.then((tempUser) => {
			user = tempUser;
			return getGrades(user.schoolId)
		})
		.then((grades) => {
			let average = 0;
			average = grades.map((grade) => grade.grade).reduce((reducer, el) => {
				return reducer + el / grades.length;
			}, 0);
			return `${user.name} has a ${average}% in the class`; // this is promise !!!
		});
};




// Aync Await basics
const getNamePR = () => {
	return new Promise((resolve, reject) => {
		resolve('Mike');
	})
}
const getNameAA = async (userId) => {
	//throw new Error('This is error'); // returns rejected promise
	return 'Mike'; // returns resolved promise
};
// getNamePR().then((name) => console.log(name));
// getNameAA().then((name) => console.log(name));


// AA version of Andrew has 83% in the class
const getStatusAA = async (userId) => {
	const user = await getUser(userId);
	const grades = await getGrades(user.schoolId);

	let average = 0;
	average = grades.map((grade) => grade.grade).reduce((reducer, el) => {
		return reducer + el / grades.length;
	}, 0);
	return `${user.name} has a ${average}% in the class`; // this is promise !!!
};


// ------------------- RUN --------------------------

// getUser(1)
// 	.then((user) => {
// 		console.log(user);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	})

// getGrades(101)
// 	.then((grades) => {
// 		console.log(grades);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	})

// getStatus(1)
// 	.then((grades) => {
// 		console.log(grades);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	})

getStatusAA(1)
	.then((status) => {
		console.log(status);
	})
	.catch((e) => {
		console.log(e);
	})