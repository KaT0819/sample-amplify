/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFacility = /* GraphQL */ `
  mutation CreateFacility(
    $input: CreateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    createFacility(input: $input, condition: $condition) {
      id
      name
      numberOfPeople
      description
      recordingStatus
      createdAt
      updatedAt
    }
  }
`;
export const updateFacility = /* GraphQL */ `
  mutation UpdateFacility(
    $input: UpdateFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    updateFacility(input: $input, condition: $condition) {
      id
      name
      numberOfPeople
      description
      recordingStatus
      createdAt
      updatedAt
    }
  }
`;
export const deleteFacility = /* GraphQL */ `
  mutation DeleteFacility(
    $input: DeleteFacilityInput!
    $condition: ModelFacilityConditionInput
  ) {
    deleteFacility(input: $input, condition: $condition) {
      id
      name
      numberOfPeople
      description
      recordingStatus
      createdAt
      updatedAt
    }
  }
`;
