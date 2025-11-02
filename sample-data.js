// sample-data.js - 15 Realistic Sample Problems with Real Addresses & Complete Records

function loadSampleData() {
    // Check if data already exists
    if (localStorage.getItem('sampleDataLoaded')) {
        return;
    }

    let problems = [
        {
            id: 'PROB-2025-00001',
            userId: 'USER-DEMO-001',
            category: 'SIPCOT Industrial Contamination',
            ward: 'Ward 1 - SIPCOT Industrial Area',
            address: 'Near SIPCOT Gate No. 1, Industrial Estate Road, Perundurai 638315',
            status: 'Working',
            description: 'Heavy TDS contamination detected. Water turned brownish. SIPCOT factory discharge suspected.',
            severity: 'Critical',
            affectedArea: 'Industrial',
            endorsements: 45,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Assigned to Team A for investigation', timestamp: new Date(Date.now() - 18*60*60*1000).toISOString()},
                {userName: 'Field Team', text: 'TDS level found: 2100 mg/L (safe limit: 500 mg/L)', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 24*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 23*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 20*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 6*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 24*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team A',
            gps: {lat: 11.2650, lng: 77.5800}
        },
        {
            id: 'PROB-2025-00002',
            userId: 'USER-DEMO-001',
            category: 'Low Water Pressure',
            ward: 'Ward 7 - Velliyam Palayam',
            address: '123, Velliyam Street, Velliyam Palayam, Perundurai 638312',
            status: 'Completed',
            description: 'Very low water pressure in morning hours. Pipeline capacity reduced.',
            severity: 'Medium',
            affectedArea: 'Residential',
            endorsements: 12,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Pressure valve adjusted', timestamp: new Date(Date.now() - 8*60*60*1000).toISOString()},
                {userName: 'User', text: 'Thank you! Pressure is normal now', timestamp: new Date(Date.now() - 2*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 6*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 5*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 4*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 2*60*60*1000).toISOString()},
                {status: 'Completed', timestamp: new Date().toISOString()}
            ],
            reportedDate: new Date(Date.now() - 6*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team C',
            gps: {lat: 11.2800, lng: 77.5900}
        },
        {
            id: 'PROB-2025-00003',
            userId: 'USER-DEMO-001',
            category: 'Water Discoloration',
            ward: 'Ward 3 - Elithingal Patti',
            address: '456, Kovai Road, Elithingal Patti, Perundurai 638311',
            status: 'Noted',
            description: 'Water color changed to brownish. Iron contamination suspected. Taste also affected.',
            severity: 'High',
            affectedArea: 'Residential',
            endorsements: 23,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Sample collected for testing', timestamp: new Date(Date.now() - 48*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 48*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 36*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 48*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: null,
            gps: {lat: 11.2750, lng: 77.5850}
        },
        {
            id: 'PROB-2025-00004',
            userId: 'USER-DEMO-001',
            category: 'Sewage Cross-Contamination',
            ward: 'Ward 12 - Palap Palayam',
            address: '789, Main Bazar Street, Palap Palayam, Perundurai 638313',
            status: 'Pending',
            description: 'Sewage smell near water supply junction. Pipes may have crossed causing contamination.',
            severity: 'High',
            affectedArea: 'Residential',
            endorsements: 8,
            endorsedBy: [],
            comments: [
                {userName: 'User', text: 'Very strong sewage smell - need urgent action', timestamp: new Date(Date.now() - 18*60*60*1000).toISOString()},
                {userName: 'Admin', text: 'Assigned to Team B. Will check tomorrow morning', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 24*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 20*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 24*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team B',
            gps: {lat: 11.2700, lng: 77.5750}
        },
        {
            id: 'PROB-2025-00005',
            userId: 'USER-DEMO-001',
            category: 'Maintenance Delays',
            ward: 'Ward 15 - Residential Sectors',
            address: 'Plot 456, Perundurai Nagar, Residential Sector 2, Perundurai 638314',
            status: 'Reported',
            description: 'Pipeline broken 4 days ago. Still no repair done. Entire sector has no water supply.',
            severity: 'Critical',
            affectedArea: 'Residential',
            endorsements: 67,
            endorsedBy: [],
            comments: [
                {userName: 'User', text: 'This is urgent! 4 days without water is not acceptable', timestamp: new Date(Date.now() - 96*60*60*1000).toISOString()},
                {userName: 'User 2', text: 'Same issue here. Very frustrating', timestamp: new Date(Date.now() - 72*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 96*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 96*60*60*1000).toISOString(),
            escalatedDate: new Date(Date.now() - 24*60*60*1000).toISOString(),
            assignedTo: null,
            gps: {lat: 11.2600, lng: 77.5900}
        },
        {
            id: 'PROB-2025-00006',
            userId: 'USER-DEMO-001',
            category: 'Intermittent Supply',
            ward: 'Ward 5 - Kasilingam Palayam',
            address: '234, Temple Street, Kasilingam Palayam, Perundurai 638310',
            status: 'Working',
            description: 'Water supply available only 2 hours per day (6-8 AM). Very insufficient for daily needs.',
            severity: 'High',
            affectedArea: 'Residential',
            endorsements: 34,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Pump capacity issue identified. Team D working on it', timestamp: new Date(Date.now() - 10*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 36*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 30*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 24*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 10*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 36*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team D',
            gps: {lat: 11.2780, lng: 77.5820}
        },
        {
            id: 'PROB-2025-00007',
            userId: 'USER-DEMO-001',
            category: 'Turbidity/Sediment',
            ward: 'Ward 2 - Perundurai Town Center',
            address: '567, Market Road, Perundurai Town, Perundurai 638305',
            status: 'Completed',
            description: 'Water is turbid with visible sediment particles. Pipe cleaning required.',
            severity: 'Medium',
            affectedArea: 'Commercial',
            endorsements: 18,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Pipes cleaned and flushed', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()},
                {userName: 'User', text: 'Perfect! Water is clear now', timestamp: new Date(Date.now() - 2*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 24*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 18*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()},
                {status: 'Completed', timestamp: new Date(Date.now() - 2*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 24*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team A',
            gps: {lat: 11.2720, lng: 77.5840}
        },
        {
            id: 'PROB-2025-00008',
            userId: 'USER-DEMO-001',
            category: 'Foul Odor',
            ward: 'Ward 4 - Kuttam Palayam',
            address: '890, Main Street, Kuttam Palayam, Perundurai 638309',
            status: 'Pending',
            description: 'Strong chemical smell in water. Likely SIPCOT factory discharge mixed with supply.',
            severity: 'Critical',
            affectedArea: 'Residential',
            endorsements: 29,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Escalating to Supreme Authority for investigation', timestamp: new Date(Date.now() - 6*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 18*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 6*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 18*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team C',
            gps: {lat: 11.2760, lng: 77.5880}
        },
        {
            id: 'PROB-2025-00009',
            userId: 'USER-DEMO-001',
            category: 'Meter/Billing Issues',
            ward: 'Ward 8 - Ingur',
            address: '123, Ingur Main Road, Ingur, Perundurai 638316',
            status: 'Completed',
            description: 'Water meter showing incorrect reading. Charged double the normal amount.',
            severity: 'Low',
            affectedArea: 'Residential',
            endorsements: 5,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Meter replaced. Refund issued for overcharge', timestamp: new Date(Date.now() - 8*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 24*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 20*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()},
                {status: 'Completed', timestamp: new Date(Date.now() - 8*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 24*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team B',
            gps: {lat: 11.2850, lng: 77.5950}
        },
        {
            id: 'PROB-2025-00010',
            userId: 'USER-DEMO-001',
            category: 'Heavy Metal Contamination',
            ward: 'Ward 6 - Kadappamadi',
            address: '345, Tank Street, Kadappamadi, Perundurai 638308',
            status: 'Working',
            description: 'Iron and fluoride levels are beyond safe limits. Testing lab confirmed contamination.',
            severity: 'Critical',
            affectedArea: 'Residential',
            endorsements: 41,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Lab report: Iron 8.5 mg/L (safe: 0.3), Fluoride 2.1 mg/L (safe: 1.0)', timestamp: new Date(Date.now() - 16*60*60*1000).toISOString()},
                {userName: 'User', text: 'This is serious. What should we do?', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 30*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 24*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 18*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 16*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 30*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team D',
            gps: {lat: 11.2710, lng: 77.5760}
        },
        {
            id: 'PROB-2025-00011',
            userId: 'USER-DEMO-001',
            category: 'Drainage & Flooding',
            ward: 'Ward 9 - Kambaliyam Patti',
            address: '567, Water Pump Station Road, Kambaliyam Patti, Perundurai 638312',
            status: 'Noted',
            description: 'Water drainage blocked. Stagnant water accumulating near water supply area. Risk of disease.',
            severity: 'High',
            affectedArea: 'Residential',
            endorsements: 16,
            endorsedBy: [],
            comments: [
                {userName: 'User', text: 'Mosquitoes breeding in stagnant water', timestamp: new Date(Date.now() - 42*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 42*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 36*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 42*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: null,
            gps: {lat: 11.2820, lng: 77.5870}
        },
        {
            id: 'PROB-2025-00012',
            userId: 'USER-DEMO-001',
            category: 'Pipeline Leak',
            ward: 'Ward 11 - Sarali',
            address: '789, Sarali Market Road, Sarali, Perundurai 638314',
            status: 'Working',
            description: 'Water leaking from main pipeline. Water wastage and pressure loss in area.',
            severity: 'Medium',
            affectedArea: 'Residential',
            endorsements: 22,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Leak location identified at KM 2.3. Repair in progress', timestamp: new Date(Date.now() - 8*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 18*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 16*60*60*1000).toISOString()},
                {status: 'Pending', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 8*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 18*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team A',
            gps: {lat: 11.2790, lng: 77.5810}
        },
        {
            id: 'PROB-2025-00013',
            userId: 'USER-DEMO-001',
            category: 'Water Tanker Quality Issues',
            ward: 'Ward 10 - Periyavettu Palayam',
            address: '234, Tank Depot Road, Periyavettu Palayam, Perundurai 638311',
            status: 'Completed',
            description: 'Water supplied by tanker is contaminated. Tanker hygiene is questionable.',
            severity: 'High',
            affectedArea: 'Residential',
            endorsements: 14,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Tanker inspection done. Found algae growth inside. Sanitization completed', timestamp: new Date(Date.now() - 10*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 20*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 16*60*60*1000).toISOString()},
                {status: 'Working', timestamp: new Date(Date.now() - 12*60*60*1000).toISOString()},
                {status: 'Completed', timestamp: new Date(Date.now() - 10*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 20*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: 'Team C',
            gps: {lat: 11.2770, lng: 77.5900}
        },
        {
            id: 'PROB-2025-00014',
            userId: 'USER-DEMO-001',
            category: 'Maintenance Delays',
            ward: 'Ward 13 - Varap Palayam',
            address: '456, Village Main Road, Varap Palayam, Perundurai 638315',
            status: 'Reported',
            description: 'Broken water pipe reported 2 days ago. Still waiting for maintenance team action.',
            severity: 'High',
            affectedArea: 'Residential',
            endorsements: 9,
            endorsedBy: [],
            comments: [
                {userName: 'User', text: 'Why is there so much delay in repairs?', timestamp: new Date(Date.now() - 48*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 48*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 48*60*60*1000).toISOString(),
            escalatedDate: new Date(Date.now() - 24*60*60*1000).toISOString(),
            assignedTo: null,
            gps: {lat: 11.2730, lng: 77.5920}
        },
        {
            id: 'PROB-2025-00015',
            userId: 'USER-DEMO-001',
            category: 'SIPCOT Industrial Contamination',
            ward: 'Ward 14 - Karuppa Goundar Pudur',
            address: '890, Industrial Area Extension, Karuppa Goundar Pudur, Perundurai 638316',
            status: 'Noted',
            description: 'Water contamination near industrial zone. Textile factory discharge suspected in supply.',
            severity: 'Critical',
            affectedArea: 'Industrial',
            endorsements: 38,
            endorsedBy: [],
            comments: [
                {userName: 'Admin', text: 'Coordinating with SIPCOT authorities for investigation', timestamp: new Date(Date.now() - 30*60*60*1000).toISOString()}
            ],
            timeline: [
                {status: 'Reported', timestamp: new Date(Date.now() - 54*60*60*1000).toISOString()},
                {status: 'Noted', timestamp: new Date(Date.now() - 30*60*60*1000).toISOString()}
            ],
            reportedDate: new Date(Date.now() - 54*60*60*1000).toISOString(),
            escalatedDate: null,
            assignedTo: null,
            gps: {lat: 11.2680, lng: 77.5880}
        }
    ];

    // Check if problems already exist
    let existingProblems = JSON.parse(localStorage.getItem('problems')) || [];
    
    if (existingProblems.length === 0) {
        localStorage.setItem('problems', JSON.stringify(problems));
    }

    localStorage.setItem('sampleDataLoaded', 'true');
    console.log('✅ Sample data loaded: 15 problems across all wards');
}

// Call this function when page loads
document.addEventListener('DOMContentLoaded', loadSampleData);
