import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
const Courses = () => (
  <Query
    query={gql`
      {
        property(id: "0mnl5TSXqE") {
          objectId
          pictureUrl
          title
          deleted
          timeZone
          partner
          partnerPropertyId
          partnerUserId
          numOfBedrooms
          numOfBeds
          numOfBathrooms
          type
          detailsAccess
          detailsGarbage
          detailsParking
          detailsWifiName
          detailsWifiPassword
          detailsWifiDescription
          detailsInformation
          sample
          hasUserTitle
          countryCode
          propertyRole
          ownerRole
          userData
          userDataVersion
          hasTrigger
          createdAt
          updatedAt
          acl
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :</p>
      return <p>`${data}</p>
    }}
  </Query>
)
export default Courses
