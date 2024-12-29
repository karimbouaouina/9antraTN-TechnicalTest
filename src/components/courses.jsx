import courseCover from '../assets/react-cover.jpg'

const courses = [
    {
      title: 'Spring Boot / Angular',
      image: courseCover,
      price: '350 DT/Month'
    },
    {
      title: 'Node JS / React',
      image: courseCover,
      price: '350 DT/Month'
    },
    {
      title: 'Flutter / Firebase',
      image: courseCover,
      price: '350 DT/Month'
    },
    {
      title: 'Business Intelligence',
      image: courseCover,
      price: '350 DT/Month'
    },
    {
      title: 'Artificial Intelligence',
      image: courseCover,
      price: '350 DT/Month'
    },
    {
      title: 'DevOps',
      image: courseCover,
      price: '350 DT/Month'
    }
  ]
  
  function Courses() {
    return (
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-black">Discover Our Courses</h2>
            <button className="bg-pink-700 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition-colors">
              View More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover  rounded-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{course.title}</h3>
                  <p className="text-pink-700 font-bold text-xl">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Courses
  
  