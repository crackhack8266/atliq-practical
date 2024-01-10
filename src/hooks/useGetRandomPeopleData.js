import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosClient } from '#/utils';

const getRandomPeopleData = ({ pageParam = 1, params }) =>
  AxiosClient.get(`api`, {
    params: {
      ...params,
      page: pageParam,
    },
  })
    .then((data) => ({
      ...data.data,
      status: data.status,
    }))
    .catch((error) => ({
      ...error.response.data.error,
      status: error.response.status,
    }));

const useGetRandomPeopleData = (params, options = {}) =>
  useInfiniteQuery(
    ['home', params],
    ({ pageParam }) => getRandomPeopleData({ pageParam, params }),
    {
      ...options,
      getNextPageParam: (lastPage) => {
        const nextPage = Number(lastPage?.info?.page) + 1;
        return lastPage?.info?.seed ? nextPage : null;
      },
    }
  );

export default useGetRandomPeopleData;
