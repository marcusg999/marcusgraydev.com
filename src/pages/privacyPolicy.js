import React from 'react';

// Define styles object first to avoid 'no-use-before-define' error
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    margin: '20px',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    color: '#0056b3',
  },
  heading: {
    color: '#0056b3',
    marginTop: '20px',
  },
};

const PrivacyPolicy = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Privacy Policy for FitShamer</h1>
    <p>Effective Date: [9/11/2024]</p>
    <p>
      Your privacy is important to us. This Privacy Policy explains how FitShamer
      (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares
      information about you when you use our mobile application (&quot;the App&quot;).
      Please read this Privacy Policy carefully.
    </p>

    <h2 style={styles.heading}>Information We Collect</h2>
    <p>We collect the following types of information when you use the App:</p>
    <ul>
      <li>
        <strong>Personal Information:</strong> If you create an account or provide
        information such as your name, email address, or fitness goals, we collect
        and store this data.
      </li>
      <li>
        <strong>Usage Information:</strong> We collect data about how you use the App,
        including your interactions with features like the calendar and goal-setting
        tools.
      </li>
      <li>
        <strong>Device Information:</strong> Information about the device you use, such
        as your IP address, device type, operating system, and app version.
      </li>
    </ul>

    <h2 style={styles.heading}>How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul>
      <li>Provide, maintain, and improve the Apps functionality and performance.</li>
      <li>
        Personalize your experience, including delivering cynical motivational comments
        tailored to your fitness journey.
      </li>
      <li>
        Send you notifications, reminders, and updates related to your goals or app
        features.
      </li>
      <li>
        Analyze trends, usage, and activity to enhance user experience and app
        effectiveness.
      </li>
    </ul>

    <h2 style={styles.heading}>Sharing Your Information</h2>
    <p>
      We do not sell or rent your personal information to third parties. We may share
      information under the following circumstances:
    </p>
    <ul>
      <li>
        With service providers that assist us in running the App (e.g., hosting,
        analytics, customer support).
      </li>
      <li>
        In response to legal requests, court orders, or applicable law enforcement
        requirements.
      </li>
      <li>To protect the rights and safety of our users and the general public.</li>
    </ul>

    <h2 style={styles.heading}>Your Choices</h2>
    <p>
      You may opt out of receiving push notifications by adjusting your device settings.
      You can also request that we delete your personal information by contacting us at
      [Marcusgraydev@gmail.com].
    </p>

    <h2 style={styles.heading}>Security</h2>
    <p>
      We take reasonable measures to protect your information from unauthorized access,
      but no security system is impenetrable. Use the App at your own risk.
    </p>

    <h2 style={styles.heading}>Changes to This Privacy Policy</h2>
    <p>
      We may update this Privacy Policy from time to time. Any changes will be posted
      here with the updated &quot;Effective Date&quot; above.
    </p>

    <h2 style={styles.heading}>Contact Us</h2>
    <p>
      If you have any questions or concerns about this Privacy Policy, please contact us
      at [Marcusgraydev@gmail.com].
    </p>
  </div>
);

export default PrivacyPolicy;
