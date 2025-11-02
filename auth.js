// auth.js - Authentication Functions

// User Registration
function registerUser(aadhaar, name, phone, email, address, ward, photoBase64, password, confirmPassword) {
    // Validation
    if (!aadhaar || aadhaar.length !== 12 || isNaN(aadhaar)) {
        return { success: false, message: 'Aadhaar must be 12 digits' };
    }
    if (!phone || phone.length !== 10 || isNaN(phone)) {
        return { success: false, message: 'Phone must be 10 digits' };
    }
    if (!email || !email.includes('@')) {
        return { success: false, message: 'Invalid email format' };
    }
    if (!password || password.length < 6) {
        return { success: false, message: 'Password must be 6+ characters' };
    }
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match' };
    }
    if (!photoBase64) {
        return { success: false, message: 'Photo is required' };
    }

    // Check if user exists
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.aadhaar === aadhaar || u.email === email)) {
        return { success: false, message: 'User already registered with this Aadhaar/Email' };
    }

    // Create new user
    let newUser = {
        id: 'USER-' + Date.now(),
        aadhaar: aadhaar,
        name: name,
        email: email,
        phone: phone,
        address: address,
        ward: ward,
        photo: photoBase64,
        password: password,
        verified: true,
        registeredDate: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Registration successful!', user: newUser };
}

// User Login
function loginUser(emailOrAadhaar, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => 
        (u.email === emailOrAadhaar || u.aadhaar === emailOrAadhaar) && u.password === password
    );

    if (!user) {
        return { success: false, message: 'Invalid email/aadhaar or password' };
    }

    // Create session
    let session = {
        userType: 'user',
        userId: user.id,
        userName: user.name,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('currentSession', JSON.stringify(session));
    return { success: true, message: 'Login successful!', user: user };
}

// Admin Login
function loginAdmin(username, password) {
    if (username === 'admin' && password === 'admin123') {
        let session = {
            userType: 'admin',
            adminId: 'ADMIN-001',
            adminName: 'Administrator',
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentSession', JSON.stringify(session));
        return { success: true, message: 'Admin login successful!' };
    }
    return { success: false, message: 'Invalid admin credentials' };
}

// Supreme Login
function loginSupreme(username, password) {
    if (username === 'supreme' && password === 'supreme123') {
        let session = {
            userType: 'supreme',
            supremeId: 'SUPREME-001',
            supremeName: 'Supreme Authority',
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentSession', JSON.stringify(session));
        return { success: true, message: 'Supreme login successful!' };
    }
    return { success: false, message: 'Invalid supreme credentials' };
}

// Check if user is logged in
function isLoggedIn(requiredType = null) {
    let session = JSON.parse(localStorage.getItem('currentSession'));
    if (!session) return false;
    if (requiredType && session.userType !== requiredType) return false;
    return true;
}

// Get current session
function getCurrentSession() {
    return JSON.parse(localStorage.getItem('currentSession')) || null;
}

// Logout
function logout() {
    localStorage.removeItem('currentSession');
    window.location.href = 'index.html';
}

// Redirect to login if not authenticated
function requireLogin(requiredType = null) {
    if (!isLoggedIn(requiredType)) {
        if (requiredType === 'user') {
            window.location.href = 'user-login.html';
        } else if (requiredType === 'admin') {
            window.location.href = 'admin-login.html';
        } else if (requiredType === 'supreme') {
            window.location.href = 'supreme-login.html';
        } else {
            window.location.href = 'user-login.html';
        }
    }
}
