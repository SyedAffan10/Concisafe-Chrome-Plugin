# ConciSafe

**Unleash the world of pure content**

ConciSafe is a Chrome extension powered by AI that helps detect and filter harmful content online, including hate speech and toxic comments. It integrates with Hugging Face pre-trained models for real-time content moderation.

## 📹 Demo Video

<div align="center">
  <a href="https://github.com/SyedAffan10/Concisafe-Chrome-Plugin/blob/main/Demo.mp4">
    <img alt="Demo Video" src="https://github.com/SyedAffan10/Concisafe-Chrome-Plugin/raw/main/Demo.mp4" width="600" />
  </a>
</div>


## Features

- 🛡️ **Real-time Content Detection** - Automatically identifies hate speech and toxic content on web pages
- 🤖 **AI-Powered** - Uses state-of-the-art Hugging Face models for accurate detection
- ⚡ **Fast & Lightweight** - Minimal impact on browsing performance
- 🌐 **Works Across the Web** - Monitors content on all HTTPS websites

## Project Structure

```
Concisafe-Chrome-Plugin/
├── plugin/                          # Chrome extension files
│   ├── manifest.json               # Extension configuration
│   ├── popup.html                  # Extension popup UI
│   ├── popup.js                    # Popup logic
│   ├── content.js                  # Content script for page analysis
│   ├── background.js               # Background service worker
│   ├── config.json                 # Configuration settings
│   ├── app.py                      # Flask backend API
│   ├── requirements.txt            # Python dependencies
│   └── jquery.min.js               # jQuery library
└── README.md                       # This file
```

## Installation

### Prerequisites
- Python 3.8 or higher
- Chrome/Chromium browser
- pip package manager

### Setup Instructions

1. **Install Python Dependencies**
   ```bash
   cd plugin
   pip install -r requirements.txt
   ```

2. **Start the Flask Backend**
   ```bash
   python app.py
   ```

3. **Load Chrome Extension**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the `plugin` folder
   - The ConciSafe extension should now appear in your extensions

## Models Used

ConciSafe uses the following pre-trained Hugging Face models:

- **IMSyPP/hate_speech_en** - English hate speech detection model
- **cardiffnlp/twitter-roberta-base-hate-latest** - RoBERTa-based hate speech classifier for social media

## Technology Stack

- **Frontend**: HTML, CSS, jQuery
- **Backend**: Python Flask
- **AI/ML**: Hugging Face Transformers
- **Browser Integration**: Chrome Extension APIs

## Configuration

Edit `plugin/config.json` to customize:
- Model selection
- Detection sensitivity
- API endpoints
- Filtering rules

## Usage

1. Once installed, ConciSafe will run in the background
2. Click the extension icon to open the popup and view moderation details
3. Configure settings in the popup interface
4. The extension monitors all web content and flags potentially harmful text

## Development

### Key Files

- `app.py` - Main Flask server and API endpoints for content analysis
- `content.js` - Injects detection logic into web pages
- `popup.js` - Handles extension UI interactions
- `background.js` - Manages extension lifecycle and permissions

---

Made with ❤️ for a safer internet
