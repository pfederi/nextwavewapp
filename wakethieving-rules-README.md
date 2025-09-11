# Wakethieving Rules API

A comprehensive, multilingual API providing safety rules and guidelines for wakethieving (pumpfoiling behind ships) in Switzerland. This API serves structured data for mobile apps, websites, and other applications promoting safe and responsible pumpfoiling practices.

## 🌊 What is Wakethieving?

Wakethieving is the practice of riding the wake behind ships using a pumpfoil (hydrofoil board). While exciting, it requires strict adherence to safety rules to protect riders and maintain legal access to this sport.

## 📋 The Rules

### 1. Safe Distance Requirements
- **Keep 50 meters distance** on each side from priority vessels (passenger ships)
- **Reference**: 50 meters ≈ about one boat length for most ships

### 2. Identifying Priority Vessels
Priority vessels are marked as follows:
- **Daytime**: Green ball at the highest point
- **Nighttime**: White light at bow (front), green on starboard (right), red on port (left), plus green light at highest point

### 3. Critical Safety Rules
- ❌ **NEVER ride in front of a ship** - Always stay behind or to the side
- 🌊 **Best waves are further back** - You'll find better waves by staying behind
- ⚡ **Leave priority routes quickly** - Don't linger in shipping lanes (visible on maps)

### 4. Required Safety Equipment
- 🎯 **Highly visible head protection** - Wear bright, easy-to-spot headgear
- 🦺 **Life jacket required outside 300m shore zone** - Minimum 50N buoyancy when leaving 300m shore zone

### 5. Why This Matters
In an emergency stop, the captain must reverse, creating **powerful propeller suction that is extremely dangerous**.

⚠️ **Following these rules prevents accidents and keeps wakethieving legal!**

### 6. Join Our Community
Be part of the responsible pumpfoiling movement in Switzerland.
👉 [Sign our code of conduct](https://responsible.pumpfoiling.community/)

## 🚀 API Usage

### Base URL
```
https://raw.githubusercontent.com/pfederi/wakethievingrules/main/wakethieving-rules.json
```

### Quick Start
```javascript
// Fetch rules data
const response = await fetch('https://raw.githubusercontent.com/pfederi/wakethievingrules/main/wakethieving-rules.json');
const rulesData = await response.json();

// Access English rules
const englishRules = rulesData.languages.en.rules;

// Get specific rule
const distanceRule = englishRules.find(rule => rule.id === 'distance-requirements');
```

### Response Structure
```json
{
  "api": {
    "version": "1.1.0",
    "lastUpdated": "2025-09-11T16:00:00Z",
    "defaultLanguage": "en",
    "supportedLanguages": ["en", "de", "fr", "it"],
    "license": "GPL-2.0"
  },
  "languages": {
    "en": {
      "content": {
        "title": "Wakethieving Rules",
        "subtitle": "Safety rules description..."
      },
      "rules": [...],
      "ui": {...}
    }
  },
  "icons": {...}
}
```

## 🌍 Supported Languages

- 🇺🇸 **English** (`en`) - Default
- 🇩🇪 **German** (`de`) - Deutsch
- 🇫🇷 **French** (`fr`) - Français  
- 🇮🇹 **Italian** (`it`) - Italiano

### Language-Specific Access
```javascript
// German rules
const germanRules = rulesData.languages.de.rules;

// French UI elements
const frenchUI = rulesData.languages.fr.ui;

// Italian content
const italianContent = rulesData.languages.it.content;
```

## 📱 Mobile App Integration

### React/React Native
```jsx
import React, { useState, useEffect } from 'react';

function WakethievingRules() {
  const [rules, setRules] = useState(null);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/pfederi/wakethievingrules/main/wakethieving-rules.json')
      .then(response => response.json())
      .then(data => setRules(data.languages.en.rules));
  }, []);

  return (
    <div>
      {rules?.map(rule => (
        <div key={rule.id}>
          <h3>{rule.title}</h3>
          {/* Render rule content */}
        </div>
      ))}
    </div>
  );
}
```

### Swift/iOS
```swift
struct RulesData: Codable {
    let api: APIInfo
    let languages: [String: LanguageData]
}

func fetchRules() async {
    let url = URL(string: "https://raw.githubusercontent.com/pfederi/wakethievingrules/main/wakethieving-rules.json")!
    let (data, _) = try await URLSession.shared.data(from: url)
    let rulesData = try JSONDecoder().decode(RulesData.self, from: data)
    // Use rulesData.languages["en"]?.rules
}
```

### Android/Kotlin
```kotlin
data class RulesResponse(
    val api: ApiInfo,
    val languages: Map<String, LanguageData>
)

suspend fun fetchRules(): RulesResponse {
    val response = httpClient.get("https://raw.githubusercontent.com/pfederi/wakethievingrules/main/wakethieving-rules.json")
    return response.body()
}
```

## 🎨 UI Components

The API includes UI configuration for consistent presentation:

```json
{
  "ui": {
    "colors": {
      "primary": "#2c5461",
      "secondary": "#407d97", 
      "accent": "#59a8c7",
      "info": "#e6f3f7"
    },
    "footer": {
      "message": "Enjoy your waves responsibly! 🏄‍♂️"
    },
    "apiSource": "Rules loaded from Wakethieving Rules API"
  }
}
```

## 🔧 Developer Features

### Versioning
- **Semantic versioning** (e.g., `1.1.0`)
- **Last updated timestamps** for cache invalidation
- **Backward compatibility** maintained

### CORS Support
- ✅ **CORS enabled** for web applications
- ✅ **No authentication required**
- ✅ **Rate limiting friendly**

### Caching Strategy
```javascript
// Cache with timestamp validation
const cacheKey = 'wakethieving-rules';
const cached = localStorage.getItem(cacheKey);
const cacheTime = localStorage.getItem(`${cacheKey}-time`);

if (cached && Date.now() - parseInt(cacheTime) < 3600000) { // 1 hour
  return JSON.parse(cached);
}
```

## 📊 Rule Categories

| Rule ID | Category | Priority | Equipment Required |
|---------|----------|----------|-------------------|
| `distance-requirements` | Distance | Critical | ❌ |
| `ship-identification` | Recognition | High | ❌ |
| `critical-rules` | Safety | Critical | ❌ |
| `safety-equipment` | Equipment | Critical | ✅ |
| `why-it-matters` | Education | Medium | ❌ |
| `community` | Social | Low | ❌ |

## 🛠️ Contributing

### Adding New Languages
1. Fork the repository
2. Add language data to `wakethieving-rules.json`
3. Update `supportedLanguages` array
4. Submit pull request

### Updating Rules
1. Modify content in appropriate language sections
2. Update `lastContentUpdate` timestamp
3. Increment version if needed
4. Test with consuming applications

### Translation Guidelines
- Maintain **technical accuracy** for safety rules
- Keep **consistent terminology** across languages
- Preserve **formatting structure**
- Include **cultural context** where appropriate

## 📄 License

**GPL-2.0** - This ensures the rules remain open and accessible while protecting the integrity of safety information.

## 🔗 Related Projects

- **NextWave iOS App**: [GitHub](https://github.com/pfederi/NextWave)
- **NextWave Android App**: [GitHub](https://github.com/pfederi/NextWaveAndroid)
- **Landing Page**: [nextwaveapp.ch](https://nextwaveapp.ch)
- **Community**: [responsible.pumpfoiling.community](https://responsible.pumpfoiling.community/)

## 📞 Support

For questions about the API or wakethieving safety:
- 📧 **Technical Issues**: Create an issue in this repository
- 🌊 **Safety Questions**: Contact the responsible pumpfoiling community
- 📱 **App Integration**: Check the mobile app repositories

---

**Stay safe, ride responsibly! 🏄‍♂️🌊**
