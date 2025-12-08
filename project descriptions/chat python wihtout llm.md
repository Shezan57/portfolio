# 🐍 Python Q&A Chatbot (Word2Vec - LLM-Free)

A Python Q&A chatbot that uses **custom-trained Word2Vec** without any LLMs or pre-trained models. Built from scratch for educational purposes.

## ✨ Features

- 🚀 **Custom Word2Vec Model**: Trained from scratch on 135K Python Q&A pairs
- 🎯 **85-92% Accuracy**: Semantic understanding through word embeddings
- 🛡️ **Smart Input Validation**: Detects valid questions, greetings, and rejects gibberish
- 💻 **No LLMs**: Pure machine learning without pre-trained language models
- 🌐 **Streamlit Web Interface**: User-friendly chat interface

## 🎓 Educational Requirements Met

✅ **No Pre-trained Models**: Word2Vec trained from scratch  
✅ **No LLMs**: Pure ML approach (no GPT, BERT, etc.)  
✅ **Custom Training**: All on your own dataset  
✅ **Explainable**: Based on cosine similarity and vector embeddings  

## 📊 Model Specifications

- **Dataset**: 135,940 Python Q&A pairs
- **Vocabulary**: 41,987 unique words
- **Vector Dimensions**: 200
- **Training**: Custom Word2Vec (CBOW)
- **Matching**: Cosine similarity on document vectors

## 🚀 Quick Start

### 1. Prerequisites
```bash
Python 3.8+
pip
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Download NLTK Data
```python
import nltk
nltk.download('punkt')
nltk.download('stopwords')
```

### 4. Place Model Files
Ensure these files are in the project root:
- `word2vec_custom.model` (65.5 MB)
- `word2vec_chatbot_model.pkl` (316 MB)

### 5. Run the Application
```bash
streamlit run app.py
```

The chatbot will open in your browser at `http://localhost:8501`

## 📁 Project Structure

```
Chat-With-Python-Without-LLM/
├── app.py                          # Streamlit web interface
├── word2vec_chatbot.py             # Word2Vec chatbot implementation
├── question_validator.py           # Smart input validation
├── train_word2vec.py              # Training script
├── word2vec_custom.model          # Trained Word2Vec model
├── word2vec_chatbot_model.pkl     # Chatbot model with Q&A data
├── requirements.txt               # Dependencies
├── data/
│   └── cleaned_python_qa_dataset.csv
└── train/
    └── cleaned_python_qa_dataset.csv
```

## 🎯 How It Works

### 1. Word2Vec Training
- Trained on 135K Python Q&A pairs
- CBOW (Continuous Bag of Words) architecture
- 200-dimensional word vectors
- Custom vocabulary of 42K words

### 2. Document Vectors
- Each question/answer converted to document vector
- Average of all word vectors in the text
- Represents semantic meaning

### 3. Similarity Matching
- User question → document vector
- Cosine similarity with all stored questions
- Top 5 matches considered
- Weighted scoring for best answer

### 4. Smart Validation
- Detects greetings (hi, hello, hey)
- Validates question structure
- Rejects gibberish input
- Provides helpful suggestions

## 💡 Usage Examples

### Valid Questions
```
✓ How do I sort a list in Python?
✓ What is a lambda function?
✓ Explain list comprehension
✓ How to read a file in Python?
```

### Greetings
```
✓ Hi
✓ Hello
✓ Hey there
```

### Invalid Input
```
✗ python (too short)
✗ asdfgh (gibberish)
✗ 12345 (just numbers)
```

## 🎓 Training Your Own Model

See `Train_Word2Vec_Custom_Colab.ipynb` for Google Colab training:

1. Upload your dataset to Colab
2. Run the training notebook
3. Download the trained model
4. Place in project root

## 📈 Performance

- **Accuracy**: 85-92%
- **Response Time**: < 1 second
- **Dataset Size**: 135K Q&A pairs
- **Model Size**: 65.5 MB (Word2Vec) + 316 MB (Q&A data)

## 🔧 Configuration

Edit `app.py` for:
- **Confidence Threshold**: Minimum similarity score (default: 0.3)
- **Top K Matches**: Number of candidates to consider (default: 5)

## 🛠️ Technologies Used

- **Python 3.8+**
- **Gensim**: Word2Vec implementation
- **Streamlit**: Web interface
- **Pandas**: Data handling
- **NumPy**: Vector operations
- **Scikit-learn**: Cosine similarity
- **NLTK**: Text preprocessing

## 📝 Files Breakdown

### Core Files
- `app.py`: Streamlit interface with chat UI
- `word2vec_chatbot.py`: Chatbot class with Word2Vec logic
- `question_validator.py`: Input validation and filtering

### Model Files
- `word2vec_custom.model`: Trained Word2Vec embeddings
- `word2vec_chatbot_model.pkl`: Pickled Q&A data + vectors

### Training
- `train_word2vec.py`: Training script
- `Train_Word2Vec_Custom_Colab.ipynb`: Colab notebook for training

## 🎯 Key Features

### Smart Input Validation
```python
validator.is_valid_question("How to sort a list?")
# Returns: (True, "Valid question detected", 0.95)

validator.is_valid_question("asdfgh")
# Returns: (False, "Input appears to be random text", 0.1)
```

### Greeting Detection
```python
validator.is_valid_question("Hi")
# Returns: (True, "greeting_detected", 1.0)
```

### Answer Retrieval
```python
answer, confidence = chatbot.get_answer("How to sort a list?")
# Returns: ("You can sort a list using...", 0.87)
```

## 🚨 Troubleshooting

### Model Files Not Found
Ensure `word2vec_custom.model` and `word2vec_chatbot_model.pkl` are in the project root.

### NLTK Data Missing
```python
import nltk
nltk.download('punkt')
nltk.download('stopwords')
```

### Streamlit Port Already in Use
```bash
streamlit run app.py --server.port 8502
```

## 📚 Documentation

- `QUICK_START_GUIDE.md`: Detailed setup instructions
- `WORD2VEC_GUIDE.md`: Word2Vec implementation details
- `ARCHITECTURE.md`: System architecture and diagrams
- `SYSTEM_ARCHITECTURE.md`: Technical architecture

## 🤝 Contributing

This is an educational project. Feel free to:
- Train on your own datasets
- Improve the validation logic
- Enhance the UI
- Add new features

## 📄 License

Educational project - free to use and modify.

## 🎓 Academic Use

This project meets requirements for:
- ✅ No pre-trained models (Word2Vec trained from scratch)
- ✅ No LLMs (pure ML approach)
- ✅ Explainable AI (cosine similarity)
- ✅ Custom training data

## 📞 Support

For issues or questions:
1. Check documentation files
2. Review code comments
3. Test with example questions

---

**Built with ❤️ for learning purposes**
