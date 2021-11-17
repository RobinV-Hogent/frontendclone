const QUIZ_DATA = [
    {
        id: "1",
        img: "https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Can you name all cities",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 1,
        rating: 0.5
    },

    {
        id: "2",
        img: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Do you the name of this animal",
        description: "Lorem Ipsum is simply sum has been the industry's standard dummy text en printer took a galley of type and scrambled it to make a type specimen book",
        category: 5,
        rating: 0.2
    },

    {
        id: "3",
        img: "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Where are these buildings situated",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been specimen book",
        category: 4,
        rating: 0.3
    },

    {
        id: "4",
        img: "https://images.pexels.com/photos/9853305/pexels-photo-9853305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Do you know these celebs",
        description: "The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 2,
        rating: 0.3
    },

    {
        id: "5",
        img: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Do you know all strats",
        description: "Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 3,
        rating: 0.3
    },

    {
        id: "6",
        img: "https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Paris Quiz",
        description: "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 1,
        rating: 0.3
    },

    {
        id: "7",
        img: "https://images.pexels.com/photos/234315/pexels-photo-234315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Berlin Quiz",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 1,
        rating: 0.8
    },

    {
        id: "8",
        img: "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Rome Quiz",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 1,
        rating: 0.65
    },

    {
        id: "9",
        img: "https://images.pexels.com/photos/1595085/pexels-photo-1595085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Brussels Quiz",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        category: 1,
        rating: 0.95
    },
]




const CATEGORY_DATA = [
    {
        id: 1,
        cat_name: "Cities"
    },
    {
        id: 2,
        cat_name: "Popular"
    },
    {
        id: 3,
        cat_name: "Games"
    },
    {
        id: 4,
        cat_name: "Buildings"
    },
    {
        id: 5,
        cat_name: "Animals"
    }
]


const QUESTIONS_DATA = [

    {
        id: "1",
        quiz_id: "1",
        question: "What's the captital of Belgium?",
        answer1: "Paris",
        answer2: "Madrid",
        answer3: "Brussels",
        correct_answer: "Brussels"
    },

    {
        id: "2",
        quiz_id: "1",
        question: "What's the captital of France?",
        answer1: "Paris",
        answer2: "Warschau",
        answer3: "Sofia",
        correct_answer: "Paris"
    },

    {
        id: "3",
        quiz_id: "1",
        question: "What's the captital of Germany?",
        answer1: "Reykjavik",
        answer2: "Madrid",
        answer3: "Berlin",
        correct_answer: "Berlin"
    },

    {
        id: "4",
        quiz_id: "6",
        question: "In which continent is Paris Situated",
        answer1: "America",
        answer2: "Europe",
        answer3: "Asia",
        correct_answer: "Europe"
    },

    {
        id: "5",
        quiz_id: "6",
        question: "In which continent is Paris Situated",
        answer1: "America",
        answer2: "Europe",
        answer3: "Asia",
        correct_answer: "Europe"
    },

    {
        id: "6",
        quiz_id: "6",
        question: "In which continent is Paris Situated",
        answer1: "America",
        answer2: "Europe",
        answer3: "Asia",
        correct_answer: "Europe"
    }

]

export { QUIZ_DATA, CATEGORY_DATA, QUESTIONS_DATA };
