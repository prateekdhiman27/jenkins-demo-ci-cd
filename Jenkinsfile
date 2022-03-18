@Library('piper-lib-os') _
pipeline {
  agent any
  stages{
       stage('prepare') {
           checkout scm
           setupCommonPipelineEnvironment script:this
       }
      stage('build') {
          mtaBuild script: this
      }
      stage('deploy') {
    cloudFoundryDeploy script: this
      }
  }
}
