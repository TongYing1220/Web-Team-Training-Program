import React, { useState } from 'react';
import Button from './common/Button';

const Contact = () => {
  // 表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 输入变化处理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 实时验证
    validateField(name, value);
  };

  // 字段验证
  const validateField = (name, value) => {
    let error = '';
    
    // 必填验证
    if (!value.trim()) {
      error = '此字段不能为空';
    } 
    // 邮箱验证
    else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = '请输入有效的邮箱地址';
      }
    }
    // 留言长度验证
    else if (name === 'message' && value.length > 500) {
      error = '留言内容不能超过500个字';
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  // 表单提交处理
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 验证所有字段
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);
    
    if (isNameValid && isEmailValid && isMessageValid) {
      alert('留言发送成功！');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>联系我</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">姓名：</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="请输入您的姓名" 
            required
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'invalid' : ''}
          />
          <span className="error-message">{errors.name}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">邮箱：</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="请输入您的邮箱" 
            required
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'invalid' : ''}
          />
          <span className="error-message">{errors.email}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">留言：</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="请输入您的留言" 
            required
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'invalid' : ''}
          ></textarea>
          <span className="error-message">{errors.message}</span>
        </div>
        
        <Button type="submit" className="submit-btn">
          发送留言
        </Button>
      </form>
    </section>
  );
};

export default Contact;