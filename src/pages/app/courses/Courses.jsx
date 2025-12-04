import React from 'react';
import Card from '../../../components/card';
import coursesData from '../../../data/courses.json';

function Courses() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Popular Courses</h1>
        <h4 className="text-gray-600">Choose your Katana ⚔️</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            title={course.title}
            img={course.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
