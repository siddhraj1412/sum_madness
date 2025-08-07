import React from 'react';

function Form1() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [semester, setSemester] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [agree, setAgree] = React.useState(false);

  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!semester) newErrors.semester = 'Semester is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!agree) newErrors.agree = 'You must agree to the terms';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = {
      name,
      email,
      mobile,
      semester,
      gender,
      message,
      password,
    };

    localStorage.setItem('formData', JSON.stringify(data));
    alert('Form submitted and saved to localStorage!');
    setErrors({});
  };

  return (
    <>
      <h2>Register Using Hooks</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <br /><br />

        <label>Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <br /><br />

        <label>Mobile: </label>
        <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile No" />
        {errors.mobile && <div style={{ color: 'red' }}>{errors.mobile}</div>}
        <br /><br />

        <label>Semester: </label>
        <select value={semester} onChange={(e) => setSemester(e.target.value)}>
          <option value="">Select</option>
          {[...Array(8)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        {errors.semester && <div style={{ color: 'red' }}>{errors.semester}</div>}
        <br /><br />

        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={(e) => setGender(e.target.value)}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={(e) => setGender(e.target.value)}
        /> Female
        {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
        <br /><br />

        <label>Message: </label><br />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message" />
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        <br /><br />

        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        <br /><br />

        <label>Confirm Password: </label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" />
        {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
        <br /><br />

        <label>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          I Agree Terms & Conditions
        </label>
        {errors.agree && <div style={{ color: 'red' }}>{errors.agree}</div>}
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form1;
