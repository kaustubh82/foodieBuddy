import { useState, useEffect } from 'react';
import api from '../services/api';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await api.get('/orders');
            setOrders(response.data);
        } catch (error) {
            toast.error('Failed to fetch orders');
        } finally {
            setLoading(false);
        }
    };

    const handleCancelOrder = async (orderId) => {
        if (!window.confirm('Are you sure you want to cancel this order?')) return;

        try {
            await api.patch(`/orders/${orderId}/cancel`);
            toast.success('Order cancelled successfully');
            fetchOrders(); // Refresh list
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to cancel order');
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'PENDING':
                return <Clock className="text-yellow-500" size={20} />;
            case 'PREPARING':
                return <Package className="text-blue-500" size={20} />;
            case 'OUT_FOR_DELIVERY':
                return <Package className="text-purple-500" size={20} />;
            case 'DELIVERED':
                return <CheckCircle className="text-green-500" size={20} />;
            case 'CANCELLED':
                return <XCircle className="text-red-500" size={20} />;
            default:
                return <Clock className="text-gray-500" size={20} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'PENDING':
                return 'bg-yellow-900/20 text-yellow-500';
            case 'PREPARING':
                return 'bg-blue-900/20 text-blue-500';
            case 'OUT_FOR_DELIVERY':
                return 'bg-purple-900/20 text-purple-500';
            case 'DELIVERED':
                return 'bg-green-900/20 text-green-500';
            case 'CANCELLED':
                return 'bg-red-900/20 text-red-500';
            default:
                return 'bg-gray-800 text-gray-400';
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8 text-white">My Orders</h1>

                {orders.length === 0 ? (
                    <div className="text-center py-12">
                        <Package className="mx-auto text-gray-600 mb-4" size={64} />
                        <p className="text-gray-400 text-lg">No orders yet</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-md">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-100">{order.restaurant.name}</h3>
                                        <p className="text-sm text-gray-400">
                                            {new Date(order.createdAt).toLocaleDateString()} at{' '}
                                            {new Date(order.createdAt).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {getStatusIcon(order.status)}
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                            {order.status.replace(/_/g, ' ')}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-800 pt-4">
                                    <h4 className="font-medium mb-2 text-gray-300">Items:</h4>
                                    <ul className="space-y-1 text-sm text-gray-400">
                                        {order.items.map((item, index) => (
                                            <li key={index}>
                                                {item.quantity}x {item.name} - ₹{(item.price * item.quantity)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-gray-800 mt-4 pt-4 flex justify-between items-center">
                                    <span className="text-xl font-bold text-primary-500">
                                        ₹{order.totalAmount}
                                    </span>
                                </div>

                                {order.status === 'PENDING' && (
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            onClick={() => handleCancelOrder(order.id)}
                                            className="text-red-500 hover:text-red-400 text-sm font-medium"
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
