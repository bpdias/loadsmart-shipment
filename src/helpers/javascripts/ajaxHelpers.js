import Constants from '../../config/Constants';

const processResponse = (response) => {
  // Check if we are handling a JSON response
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) return response.json();

  return response;
};

export const get = url => fetch(`${Constants.host}/json${url}`).then(processResponse);

