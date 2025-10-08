import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [viewCount, setViewCount] = useState(0);
    const [favoriteHobbies, setFavoriteHobbies] = useState([]);
    const [showContactForm, setShowContactForm] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const cardClassName = `profile-card ${isDarkMode ? 'dark-mode' : ''}`;

    // ฟังก์ชันสำหรับแสดง Avatar (ตัวอักษรแรกของชื่อ)
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    // ฟังก์ชันจัดการเมื่อคลิกที่ skill
    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    // เมื่อคลิกการ์ด - เพิ่มจำนวน views
    const handleCardClick = () => {
        setViewCount(viewCount + 1);
    };

    // เมื่อคลิก hobby - เพิ่มหรือลบจาก favorite
    const toggleFavoriteHobby = (hobby) => {
        setFavoriteHobbies(prev => 
            prev.includes(hobby)
                ? prev.filter(h => h !== hobby)
                : [...prev, hobby]
        );
    };

    // แสดง/ซ่อน Contact Form แทน alert
    const handleContactClick = () => {
        setShowContactForm(!showContactForm);
    };


    // TODO: นักศึกษาจะเพิ่ม state และ functions เพิ่มเติมในส่วน Challenge

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            {/* ส่วนหัว - รูปและชื่อ */}
            <div className="profile-header">
                <button 
                    className="theme-toggle"
                    onClick={toggleTheme}
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>

                <div className="profile-avatar">
                    {getInitials(profile.name)}
                </div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>
            </div>

            <div className="view-counter">👁️ Views: {viewCount}</div>

            {/* ข้อมูลพื้นฐาน */}
            <div className="profile-info">
                <div className="info-item">
                    <div className="info-label">สาขา</div>
                    <div className="info-value">{profile.major}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">ชั้นปี</div>
                    <div className="info-value">{profile.year}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">อายุ</div>
                    <div className="info-value">{profile.age} ปี</div>
                </div>
                <div className="info-item">
                    <div className="info-label">เกรด</div>
                    <div className="info-value">
                        {profile.gpa.toFixed(2)}
                        {profile.gpa >= 3.5 && ' 🌟'}
                    </div>
                </div>
            </div>

            {/* งานอดิเรก */}
            <div className="profile-section">
                <h3>🎯 งานอดิเรก</h3>
                <ul className="hobbies-list">
                    {profile.hobbies.map((hobby, index) => (
                        <li 
                            key={index}
                                className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation(); // กันไม่ให้ไปเพิ่ม viewCount
                                toggleFavoriteHobby(hobby);
                            }}
                        >
                            {hobby} {favoriteHobbies.includes(hobby) && '💖'}
                        </li>
                    ))}
                </ul>

                <h3>🏆 Achievements</h3>
                    <div className="achievements">
                    {profile.gpa >= 3.5 && (
                        <span className="achievement-badge">🌟 เกียรตินิยม</span>
                    )}
                    {profile.skills.length >= 5 && (
                        <span className="achievement-badge">💪 Multi-skilled</span>
                    )}
                    {profile.hobbies.length >= 5 && (
                        <span className="achievement-badge">🔥 Active Lifestyle</span>
                    )}
                </div>
            </div>

            {/* ทักษะ */}
            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="skill-tag"
                            onClick={() => handleSkillClick(skill)}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Links - นักศึกษาเพิ่มเอง */}
            {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="profile-section">
                    <h3>🌐 Social Media</h3>
                    <div className="social-links">
                        {profile.socialLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.url} 
                                className="social-link" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {link.platform}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* ปุ่ม Contact */}
            <button 
                className="contact-button"
                onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                }}
            >
                {showContactForm ? '❌ ปิดแบบฟอร์ม' : `📧 ติดต่อ ${profile.name}`}
            </button>

            {/* Contact Form */}
            {showContactForm && (
                <div className="contact-form">
                    <h3>ส่งข้อความถึง {profile.name}</h3>
                    <input type="text" placeholder="ชื่อของคุณ" />
                    <textarea placeholder="พิมพ์ข้อความ..." rows="4"></textarea>
                    <button className="submit-btn">ส่งข้อความ</button>
                </div>
            )}

        </div>
    );
}

export default ProfileCard;