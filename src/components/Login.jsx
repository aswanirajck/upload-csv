import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GoogleIcon } from '../assets/icons/google-icon.svg';
import { ReactComponent as AppleIcon } from '../assets/icons/apple-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as DiscordIcon } from '../assets/icons/discord.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import BackgroundSVG from '../assets/icons/left-side.svg';
import { ReactComponent as DiscordMobile } from '../assets/icons/discord-mobile.svg';
import { ReactComponent as LinkedinMobile } from '../assets/icons/linkedin-mobile.svg';
import { ReactComponent as GithubMobile } from '../assets/icons/github-mobile.svg';
import { ReactComponent as TwitterMobile } from '../assets/icons/twitter-mobile.svg';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      setError('');
      console.log('Login successful');
      login();
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8FAFF] font-montserrat">
      {
        window.innerWidth > 768 ?
          <div
            className="relative flex-1 text-white flex flex-col items-center justify-center p-8"
            style={{
              backgroundImage: `url(${BackgroundSVG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute left-0 top-0 p-8">
              <svg width="86" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
                <svg width="85" height="80" viewBox="0 0 87 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646" stroke="#605BFF" strokeWidth="6" />
                </svg>
              </svg>
            </div>
            <div className="text-4xl md:text-7xl font-bold mb-4 absolute">BASE</div>
            <div className="flex space-x-4 mt-auto mb-8">
              <a href="https://github.com" className="hover:opacity-75">
                <GithubIcon />
              </a>
              <a href="https://twitter.com" className="hover:opacity-75">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com" className="hover:opacity-75">
                <LinkedinIcon />
              </a>
              <a href="https://discord.com" className="hover:opacity-75">
                <DiscordIcon />
              </a>
            </div>
          </div> :
          <div>
            <nav className="bg-[#605BFF]">
              <div className='flex flex-row'>
                <span className='p-2'><svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z" fill="#605BFF" />
                  <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9902 13.1291L19.7848 9.94685C19.4943 9.235 18.7951 8.73336 17.9787 8.73336C17.1081 8.73336 16.3707 9.30392 16.1202 10.0915L9.99098 15.1481C9.67551 14.9286 9.29214 14.8 8.87872 14.8C8.36808 14.8 7.90328 14.9963 7.55566 15.3175L0.121365 11.6829C1.00521 5.36344 6.43234 0.5 12.9954 0.5C20.051 0.5 25.7938 6.12091 25.9902 13.1291ZM6.99929 17.2717L0 13.8498C0.185401 20.8678 5.93266 26.5 12.9954 26.5C19.6871 26.5 25.1979 21.444 25.9161 14.9437L25.7557 15.2565L19.4134 12.004C19.0571 12.391 18.5462 12.6334 17.9787 12.6334C17.5037 12.6334 17.0683 12.4635 16.73 12.1812L10.8023 17.0715C10.649 17.9955 9.84616 18.7 8.87872 18.7C7.98246 18.7 7.22743 18.0953 6.99929 17.2717Z" fill="#FAFAFB" />
                  </svg>
                </svg></span>
                <span className=" font-bold mb-4 p-2 text-white">BASE</span>
              </div>
            </nav>
          </div>
      }

      <div className="relative flex-1 flex items-center justify-center bg-[#F8FAFF] p-4 md:p-8">
        <div className="max-w-md w-full z-10 p-6 md:p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <p className="mb-4">Sign in to your account</p>
          <div className="flex space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <button className="flex-1 bg-white text-[#858585] py-2 rounded-lg hover:bg-gray-300 transition duration-200 flex items-center justify-center">
              <GoogleIcon className="mr-2" />
              Sign in with Google
            </button>
            <button className="flex-1 bg-white text-[#858585] py-2 rounded-lg hover:bg-gray-300 transition duration-200 flex items-center justify-center">
              <AppleIcon className="mr-2" />
              Sign in with Apple
            </button>
          </div>
          {error && <div className="text-red-500 mb-4 bg-white p-2 rounded">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="bg-white p-5 rounded-xl">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@gmail.com"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-200 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-200 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <a href="/forgot-password" className="text-[#346BD4] hover:underline">Forgot password?</a>
              </div>
              <div className="mb-6 flex justify-between items-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-4">
            <span className="text-[#858585]">Don't have an account? </span>
            <a href="/register" className="text-blue-500 hover:underline">Register here</a>
          </div>

        </div>
      </div>
      {window.innerWidth < 768 &&
        <>
          <div className="flex space-x-4 mt-auto mb-8 items-center justify-center">

            <a href="https://github.com" className="hover:opacity-75">
              <GithubMobile />
            </a>
            <a href="https://twitter.com" className="hover:opacity-75">
              <TwitterMobile />
            </a>
            <a href="https://linkedin.com" className="hover:opacity-75">
              <LinkedinMobile />
            </a>
            <a href="https://discord.com" className="hover:opacity-75">
              <DiscordMobile />
            </a>
          </div>
        </>
      }
    </div>
  );
};

export default Login;
