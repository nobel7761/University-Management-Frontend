import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //! get all departments
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${DEPARTMENT_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagTypes.department], //provide tags means when we request the data and then we will get the data, it will cache the data
    }),

    //! create department
    addDepartment: build.mutation({
      query: (departmentData) => ({
        url: `${DEPARTMENT_URL}/create-management`,
        method: "POST",
        data: departmentData,
      }),
      invalidatesTags: [tagTypes.department], //invalidate tags means, it will remove the previous cache data if we get the data by making a post request.
    }),

    //! get single department by id
    singleDepartment: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.department],
    }),

    //! update single department by id
    updateDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.department],
    }),

    //! delete single department by id
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useAddDepartmentMutation,
  useSingleDepartmentQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
