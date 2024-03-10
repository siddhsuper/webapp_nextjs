pipeline {
    agent any
    tools {nodejs "recent node"} 
    stages {
        stage('Build Webapp') { 
            steps {
                sh 'npm install' 
                sh 'npm run dev' 
            }
        }
    }
}