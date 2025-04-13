const Reviews = () => {
    const reviewsData = [
        {
            name: 'Alex Stanton',
            position: 'CEO at Bukalapak',
            date: '21 July 2022',
            rating: 5,
            comment:
                'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        },
        {
            name: 'Skylar Dias',
            position: 'CEO at Amazon',
            date: '20 July 2022',
            rating: 4,
            comment:
                'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        },
    ];

    return (

        <div className="  max-w-7xl mx-auto p-5 mb-12">
            <div className="rounded-md  bg-white p-5  mb-12">

                <div className="flex justify-between items-center mb-4 bg-white">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Reviews <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">13</span>
                    </h2>
                </div>


                <div className="space-y-6">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="flex space-x-4">

                            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>

                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">{review.name}</h3>
                                        <p className="text-sm text-gray-500">{review.position}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-600 text-sm">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="mt-4 text-center">
                    <button className="text-blue-600 font-medium">Show All</button>
                </div>
            </div>

        </div>

    );
};

export default Reviews;
