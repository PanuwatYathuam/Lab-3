import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง
    const myProfile = {
        name: "ภาณุวัฒน์ ยาท้วม",
        studentId: "67543210043-5",
        major: "วิศวกรรมซอฟต์แวร์",
        year: 5,
        age: 26,
        gpa: 3.55,
        email: "panuwat_ya67@live.rmutl.ac.th",
        hobbies: [
            "เล่นเกม",
            "ดูหนัง",
            "ฟังเพลง",
            "อ่านหนังสือ",
            "วาดรูป"
        ],
        skills: [
            "JavaScript",
            "React.js",
            "HTML/CSS",
            "Python",
            "Git",
            "Node.js"
        ],
        socialLinks: [
          { platform: "GitHub", url: "https://github.com/PanuwatYathuam" },
          { platform: "Instagram", url: "https://instagram.com/basbho1102" }
    ]
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={myProfile} />
        </div>
    );
}

export default App;