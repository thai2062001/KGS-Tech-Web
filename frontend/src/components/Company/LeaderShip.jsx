import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

const Leadership = ({ leaders }) => {
  const { t } = useTranslation(); // Hook để truy cập dịch

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">{t('leadership.title')}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="w-72 h-96 bg-white rounded-lg transition-transform transform sm:hover:scale-105 overflow-hidden group border-b-4 hover:border-blue-600 hover:shadow-xl"
          >
            {/* Avatar */}
            <img
              src={leader.avatar}
              alt={`Avatar of ${leader.name}`}
              className="w-full h-64 object-cover transition-all duration-300"
            />
            {/* Thông tin lãnh đạo */}
            <div className="p-4 flex flex-col justify-center items-center">
              {/* Tên lãnh đạo sử dụng khóa dịch động */}
              <h3 className="text-xl font-semibold text-gray-800">{t('leadership.name', { name: leader.name })}</h3>
              <p className="text-md text-gray-600">{t(`leadership.${leader.position.toLowerCase()}`)}</p> {/* Dịch chức vụ */}
            </div>
            {/* Viền dưới thay đổi màu khi hover */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
  