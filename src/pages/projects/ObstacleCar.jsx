function ObstacleCar() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Obstacle Avoiding Car
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          A robotics project focused on developing an autonomous vehicle
          capable of detecting and avoiding obstacles using sensors and
          Arduino.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Features
        </h2>

        <ul className="list-disc ml-6 mt-3 text-gray-600">
          <li>Obstacle detection</li>
          <li>Automatic navigation</li>
          <li>Arduino programming</li>
          <li>Sensor integration</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">
          Technologies
        </h2>

        <div className="flex gap-3 flex-wrap mt-3">
          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
            Arduino
          </span>

          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
            IoT
          </span>
        </div>

        <h2 className="text-2xl font-bold mt-8">
          Project Images
        </h2>

        <p className="text-gray-600 mt-3">
          Images will be added here.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Demo Video
        </h2>

        <p className="text-gray-600 mt-3">
          Demo video will be added here.
        </p>

      </div>
    </section>
  );
}

export default ObstacleCar;