import React, { useState } from 'react';
import CONFIG from '../config';
import ModalVideo from './ModalVideo';
import { siteConfig } from '@/lib/config';

export default function Hero() {
  // Состояние для управления видимостью модального окна с видео
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Функция для открытия модального окна
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className="relative">
      {/* Остальная часть вашего кода... */}

      {/* Контент героя */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ... */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* ... */}
          <div className="text-center pb-12 md:pb-16">
            {/* ... */}
          </div>

          {/* Кликабельное изображение для открытия модального окна с видео */}
          <div onClick={openVideoModal} style={{ cursor: 'pointer' }}>
            <img
              src={siteConfig('LANDING_HERO_VIDEO_IMAGE', null, CONFIG)}
              width={768}
              height={432}
              alt={siteConfig('HERO_HEADER_1', null, CONFIG)}
            />
          </div>

          {/* Модальное окно с видео, отображается только если состояние isVideoModalOpen === true */}
          {isVideoModalOpen && (
            <ModalVideo
              isOpen={isVideoModalOpen}
              onClose={closeVideoModal}
              video={siteConfig('HERO_VIDEO_URL', null, CONFIG)}
              videoWidth={1920}
              videoHeight={1080}
            />
          )}
        </div>
      </div>
    </section>
  );
}