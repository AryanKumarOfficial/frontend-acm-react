import React, {useState, useEffect} from 'react';
import Image from 'react-image';

const getEvents = async () => {
    const res = await fetch('http://localhost:3001/api/events', {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed to fetch events');
    }
    return res.json();
};

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEvents();
                setEvents(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []); // Empty dependency array to run only once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div key={event.title} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src={event.imageUrl}
                                alt={event.title}
                                style={{objectFit: 'cover', width: '100%', height: '100%'}}
                                onError={(e) => {
                                    e.target.src = '/api/placeholder/400/200'; // Fallback to a placeholder image
                                }}
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                            <p className="text-gray-600 mb-2">{event.description}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(event.date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
