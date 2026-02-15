import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact = () => {
  const { theme } = useTheme();
  const { addElement } = useScrollAnimation();
  
  // 表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 表单验证
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = '姓名不能为空';
    if (!formData.email.trim()) {
      newErrors.email = '邮箱不能为空';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    if (!formData.message.trim()) newErrors.message = '留言内容不能为空';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 模拟提交成功
      console.log('表单提交：', formData);
      setSubmitted(true);
      // 重置表单
      setFormData({ name: '', email: '', message: '' });
      // 3秒后重置提交状态
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  // 输入变化处理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // 清除对应字段的错误提示
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="container page-transition">
      <main>
        <section>
          <h2>联系方式</h2>
          <div className="education-card lazy-load" ref={addElement}>
            <ul style={{ listStyle: 'none', lineHeight: '2.5' }}>
              <li>📧 邮箱：syt2108155403@mail.ustc.edu.cn</li>
              <li>📱 手机：18788844759</li>
              <li>💻 GitHub：<a href="https://github.com/TongYing1220" style={{ color: 'var(--color-primary)' }}>github.com/TongYing1220</a></li>
              <li>🏫 学校：中国科学技术大学</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>留言板</h2>
          <div className="lazy-load" ref={addElement}>
            {submitted ? (
              <div style={{ color: 'green', textAlign: 'center', padding: '2rem' }}>
                ✅ 留言提交成功！我会尽快回复你。
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'invalid' : ''}
                    placeholder="请输入你的姓名"
                  />
                  <span className="error-message">{errors.name}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'invalid' : ''}
                    placeholder="请输入你的邮箱"
                  />
                  <span className="error-message">{errors.email}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="message">留言内容</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'invalid' : ''}
                    rows={5}
                    placeholder="请输入你想对我说的话"
                  ></textarea>
                  <span className="error-message">{errors.message}</span>
                </div>

                <button type="submit" className="submit-btn">提交留言</button>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};