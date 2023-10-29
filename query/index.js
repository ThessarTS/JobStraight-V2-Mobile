import { gql } from '@apollo/client'

export const GET_JOBS = gql`
query GetJobs {
  getJobs {
    id
    title
    createdAt
    updatedAt
    Company {
      companyLogo
      location
      name
    }
  }
}
`
export const GET_COMPANIES = gql`
query GetCompanies {
  getCompanies {
    id
    name
    description
    location
    email
    companyLogo
    createdAt
    updatedAt
  }
}
`
export const GET_JOB_BY_ID = gql`
query GetJobByID($getJobId: ID) {
  getJob(id: $getJobId) {
    Company {
      id
      name
      description
      location
      email
      companyLogo
    }
    Skills {
      level
      name
    }
    User {
      email
      username
    }
    createdAt
    description
    id
    jobType
    salary
    title
  }
}
`