import io from 'socket.io-client';

export function initiateSocketConnection({ token, onLogout, currentUserId }) {

    const socket = io('https://user.boostbullion.com', {
        autoConnect: false,
        extraHeaders: {
            authorization: token
        }
    });

    socket.connect();

    socket.on('connect', () => {
        // console.log('✅ Connected');
    });

    socket.on("logOut", (data) => {
        // console.log('🚨 logOut event received:', data, onLogout);
        if (onLogout) onLogout(data, currentUserId);
    });

    socket.on('connect_error', (err) => {
        // console.error('Connection error:', err);
        socket.disconnect();
    });

    socket.on('error', (err) => {
        // console.error('Socket error:', err);
        socket.disconnect();
    });

    return socket;
}