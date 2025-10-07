import { Link } from 'react-router-dom'
import { MapPin, Headphones, Mail, Rocket, Coins, Trophy, Users, Gift } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">Gamics</a>
            <p className="footer-text">
              Your ultimate gaming rewards platform. Earn points, win prizes, and trade items with other players.
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-icon">
                  <MapPin size={17} />
                </div>
                <address className="item-text">
                  Gaming Platform - Online
                </address>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <Headphones size={17} />
                </div>
                <a href="mailto:support@gamics.com" className="item-text">support@gamics.com</a>
              </li>
              <li className="contact-item">
                <div className="contact-icon">
                  <Mail size={17} />
                </div>
                <a href="mailto:info@gamics.com" className="item-text">info@gamics.com</a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Platform</p>
            </li>
            <li>
              <Link to="/earn" className="footer-link">Earn Points</Link>
            </li>
            <li>
              <Link to="/marketplace" className="footer-link">Marketplace</Link>
            </li>
            <li>
              <Link to="/trading" className="footer-link">Trading</Link>
            </li>
            <li>
              <Link to="/leaderboard" className="footer-link">Leaderboard</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Features</p>
            </li>
            <li>
              <a href="#" className="footer-link">Daily Rewards</a>
            </li>
            <li>
              <a href="#" className="footer-link">Spin Wheel</a>
            </li>
            <li>
              <a href="#" className="footer-link">XP System</a>
            </li>
            <li>
              <a href="#" className="footer-link">Referral Program</a>
            </li>
            <li>
              <a href="#" className="footer-link">Giveaways</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">Help Center</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact Us</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-link">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 Gamics. All rights reserved. | Gaming Rewards Platform
          </p>

          <ul className="social-list">
            <li>
              <a href="#" className="social-link" aria-label="facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="pinterest">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" aria-label="linkedin">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
