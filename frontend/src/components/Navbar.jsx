import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, User, LogOut, UtensilsCrossed, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 border-b border-gray-800 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <UtensilsCrossed className="text-primary-500" size={32} />
                        <span className="text-2xl font-bold text-gray-100">foodieBuddy</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/restaurants" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">
                            Restaurants
                        </Link>

                        {user ? (
                            <>
                                {user.role === 'CUSTOMER' && (
                                    <>
                                        <Link to="/cart" className="text-gray-300 hover:text-primary-500 transition-colors">
                                            <ShoppingCart size={24} />
                                        </Link>
                                        <Link to="/orders" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">
                                            Orders
                                        </Link>
                                    </>
                                )}

                                {user.role === 'RESTAURANT_OWNER' && (
                                    <Link to="/dashboard" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">
                                        Dashboard
                                    </Link>
                                )}

                                {user.role === 'ADMIN' && (
                                    <Link to="/admin" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">
                                        Admin
                                    </Link>
                                )}

                                <div className="flex items-center space-x-3">
                                    <Link to="/profile" className="flex items-center space-x-2 text-gray-300 hover:text-primary-500 transition-colors">
                                        <User size={20} />
                                        <span className="font-medium">{user.name}</span>
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                        title="Logout"
                                    >
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-gray-300 hover:text-primary-500 font-medium transition-colors">
                                    Login
                                </Link>
                                <Link to="/register" className="btn-primary">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-800 py-4 space-y-3 bg-gray-900">
                        <Link
                            to="/restaurants"
                            className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Restaurants
                        </Link>

                        {user ? (
                            <>
                                {user.role === 'CUSTOMER' && (
                                    <>
                                        <Link
                                            to="/cart"
                                            className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Cart
                                        </Link>
                                        <Link
                                            to="/orders"
                                            className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Orders
                                        </Link>
                                    </>
                                )}

                                {user.role === 'RESTAURANT_OWNER' && (
                                    <Link
                                        to="/dashboard"
                                        className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                )}

                                {user.role === 'ADMIN' && (
                                    <Link
                                        to="/admin"
                                        className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Admin
                                    </Link>
                                )}

                                <Link
                                    to="/profile"
                                    className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Profile ({user.name})
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        setMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left text-red-500 hover:text-red-400 font-medium py-2 transition-colors"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="block text-gray-300 hover:text-primary-500 font-medium py-2 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
