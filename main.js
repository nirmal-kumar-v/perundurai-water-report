// main.js - Shared Functions for All Pages

// Initialize app on first load
function initializeApp() {
    // Create default users if not exist
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Add demo user if not exists
    if (!users.some(u => u.email === 'user1@gmail.com')) {
        users.push({
            id: 'USER-DEMO-001',
            aadhaar: '123456789012',
            name: 'Demo User',
            email: 'user1@gmail.com',
            phone: '9876543210',
            address: 'Demo Address, Ward 5',
            ward: 'Ward 5 - Kasilingam Palayam',
            password: 'user1@123',
            verified: true,
            registeredDate: new Date().toISOString()
        });
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Create sample problems if not exist
    let problems = JSON.parse(localStorage.getItem('problems')) || [];
    if (problems.length === 0) {
        problems = [
            {
                id: 'PROB-2025-00001',
                userId: 'USER-DEMO-001',
                category: 'SIPCOT Industrial Contamination',
                ward: 'Ward 1 - SIPCOT Industrial Area',
                status: 'Working',
                description: 'Heavy contamination detected in Ward 1 due to SIPCOT industrial discharge',
                severity: 'Critical',
                affectedArea: 'Industrial',
                endorsements: 45,
                endorsedBy: [],
                comments: [],
                timeline: [
                    {status: 'Reported', timestamp: new Date(Date.now() - 1*24*60*60*1000).toISOString()},
                    {status: 'Noted', timestamp: new Date(Date.now() - 1*24*60*60*1000 + 2*60*60*1000).toISOString()},
                    {status: 'Pending', timestamp: new Date(Date.now() - 0.5*24*60*60*1000).toISOString()},
                    {status: 'Working', timestamp: new Date().toISOString()}
                ],
                reportedDate: new Date(Date.now() - 1*24*60*60*1000).toISOString(),
                escalatedDate: null,
                gps: {lat: 11.2650, lng: 77.5800}
            },
            {
                id: 'PROB-2025-00002',
                userId: 'USER-DEMO-001',
                category: 'Low Water Pressure',
                ward: 'Ward 7 - Velliyam Palayam',
                status: 'Completed',
                description: 'Low water pressure reported in Ward 7. Fixed with pipeline repair.',
                severity: 'Medium',
                affectedArea: 'Residential',
                endorsements: 12,
                endorsedBy: [],
                comments: [],
                timeline: [
                    {status: 'Reported', timestamp: new Date(Date.now() - 0*24*60*60*1000).toISOString()},
                    {status: 'Noted', timestamp: new Date(Date.now() - 0*24*60*60*1000 + 1*60*60*1000).toISOString()},
                    {status: 'Pending', timestamp: new Date(Date.now() - 0*24*60*60*1000 + 2*60*60*1000).toISOString()},
                    {status: 'Working', timestamp: new Date(Date.now() - 0*24*60*60*1000 + 4*60*60*1000).toISOString()},
                    {status: 'Completed', timestamp: new Date().toISOString()}
                ],
                reportedDate: new Date(Date.now() - 0*24*60*60*1000).toISOString(),
                escalatedDate: null,
                gps: {lat: 11.2800, lng: 77.5900}
            },
            {
                id: 'PROB-2025-00003',
                userId: 'USER-DEMO-001',
                category: 'Water Discoloration',
                ward: 'Ward 3 - Elithingal Patti',
                status: 'Noted',
                description: 'Water color changed to brownish. Likely due to pipeline corrosion.',
                severity: 'High',
                affectedArea: 'Residential',
                endorsements: 23,
                endorsedBy: [],
                comments: [],
                timeline: [
                    {status: 'Reported', timestamp: new Date(Date.now() - 2*24*60*60*1000).toISOString()},
                    {status: 'Noted', timestamp: new Date(Date.now() - 1*24*60*60*1000).toISOString()}
                ],
                reportedDate: new Date(Date.now() - 2*24*60*60*1000).toISOString(),
                escalatedDate: null,
                gps: {lat: 11.2750, lng: 77.5850}
            },
            {
                id: 'PROB-2025-00004',
                userId: 'USER-DEMO-001',
                category: 'Sewage Cross-Contamination',
                ward: 'Ward 12 - Palap Palayam',
                status: 'Pending',
                description: 'Sewage smell near water supply point. Pipes may have crossed.',
                severity: 'High',
                affectedArea: 'Residential',
                endorsements: 8,
                endorsedBy: [],
                comments: [],
                timeline: [
                    {status: 'Reported', timestamp: new Date(Date.now() - 1*24*60*60*1000).toISOString()},
                    {status: 'Noted', timestamp: new Date(Date.now() - 0.5*24*60*60*1000).toISOString()},
                    {status: 'Pending', timestamp: new Date().toISOString()}
                ],
                reportedDate: new Date(Date.now() - 1*24*60*60*1000).toISOString(),
                escalatedDate: null,
                gps: {lat: 11.2700, lng: 77.5750}
            },
            {
                id: 'PROB-2025-00005',
                userId: 'USER-DEMO-001',
                category: 'Maintenance Delays',
                ward: 'Ward 15 - Residential Sectors',
                status: 'Reported',
                description: 'Pipeline broken 4 days ago. Still no repair. Water supply cut off.',
                severity: 'Critical',
                affectedArea: 'Residential',
                endorsements: 67,
                endorsedBy: [],
                comments: [],
                timeline: [
                    {status: 'Reported', timestamp: new Date(Date.now() - 4*24*60*60*1000).toISOString()}
                ],
                reportedDate: new Date(Date.now() - 4*24*60*60*1000).toISOString(),
                escalatedDate: new Date(Date.now() - 1*24*60*60*1000).toISOString(),
                gps: {lat: 11.2600, lng: 77.5900}
            }
        ];
        localStorage.setItem('problems', JSON.stringify(problems));
    }
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Get days since date
function daysSince(dateString) {
    return Math.floor((new Date() - new Date(dateString)) / (1000 * 60 * 60 * 24));
}

// Get status color
function getStatusColor(status) {
    const colors = {
        'Reported': '#DC3545',
        'Noted': '#FFC107',
        'Pending': '#FF8C00',
        'Working': '#0dcaf0',
        'Completed': '#28A745',
        'Escalated': '#DC3545'
    };
    return colors[status] || '#999';
}

// Create notification
function createNotification(userId, problemId, message) {
    let notifs = JSON.parse(localStorage.getItem('notifications')) || [];
    notifs.push({
        id: 'NOTIF-' + Date.now(),
        userId: userId,
        problemId: problemId,
        message: message,
        timestamp: new Date().toISOString(),
        read: false
    });
    localStorage.setItem('notifications', JSON.stringify(notifs));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeApp);
