import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="contacts-info">
                <h6>Контакты</h6>
                <p>Email: qwerty@example.com</p>
                <p>Телефон: +7 111 123-45-67</p>
            </div>

            <div className="map-container">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5273f871ac5ba0afb46b22d9cf484161a1989c6449bdccd3e9788d34c57b58a9&source=constructor"
                    title="Яндекс Карта"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>
            </div>
        </div>
    );
};

export default Contacts;
