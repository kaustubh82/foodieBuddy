import { Link } from 'react-router-dom';
import { Search, TrendingUp, Clock } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-950">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-orange-400">
                            Delicious Food, Delivered Fast
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-300">
                            Order from your favorite restaurants and get it delivered to your doorstep
                        </p>
                        <Link
                            to="/restaurants"
                            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/20"
                        >
                            Browse Restaurants
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 rounded-xl hover:bg-gray-900/50 transition-colors duration-300">
                        <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                            <Search className="text-primary-500" size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">Easy to Order</h3>
                        <p className="text-gray-400">
                            Browse menus, read reviews, and order your favorite meals in just a few clicks
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-xl hover:bg-gray-900/50 transition-colors duration-300">
                        <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                            <Clock className="text-primary-500" size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">Fast Delivery</h3>
                        <p className="text-gray-400">
                            Get your food delivered hot and fresh within 30-45 minutes
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-xl hover:bg-gray-900/50 transition-colors duration-300">
                        <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700">
                            <TrendingUp className="text-primary-500" size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-100">Quality Food</h3>
                        <p className="text-gray-400">
                            We partner with the best restaurants to ensure top-quality meals
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 py-16 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to order?</h2>
                    <p className="text-gray-400 mb-8">
                        Join thousands of happy customers enjoying delicious food
                    </p>
                    <Link to="/restaurants" className="btn-primary text-lg px-8 py-3 shadow-lg shadow-primary-900/20">
                        Start Ordering Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
