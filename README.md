# RaspiFaceID-Frontend
Front-End Application for the RaspiFaceID project.

# Features
- Show camera stream on home page
- Add and delete authorized persons via provided api
- List an image history of captured access

# Installation
## Docker
Build the image:
```docker build -t raspifaceid-frontend .```

Run the container:
```docker run -d -p 80:80 raspifaceid-frontend```
