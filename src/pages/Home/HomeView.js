import React from "react";
import MaterialTable from "material-table";
import { ContextProvider, Context } from "./HomeState";
import Loading from "../../components/Loading";
import Select from "../../components/Select";

const HomeView = props => {
  return (
    <ContextProvider>
      <Context.Consumer>
        {({ state, dispatch }) => {
          const movieData = state.movieData;
          return (
            <div>
              {movieData.length > 0 ? (
                <div>
                  <Select
                    value={state.selectedCategory}
                    onChange={e =>
                      dispatch({
                        type: "SELECTED_CATEGORY",
                        selectedCategory: e.currentTarget.value
                      })
                    }
                  >
                    <option value="" />
                    {state.categories.map(data => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </Select>
                  <MaterialTable
                    title="Simple Movie List Table"
                    data={movieData}
                    columns={[
                      {
                        title: "Title",
                        field: "title"
                      },
                      {
                        title: "Category",
                        field: "categories"
                      },
                      {
                        title: "Rating",
                        field: "rating"
                      }
                    ]}
                    options={{
                      pageSize: 10
                    }}
                    editable={{
                      onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            const data = movieData;
                            data.push(newData);
                            dispatch({
                              type: "ADD_MOVIE_DATA",
                              movieData: data
                            });
                            resolve();
                          }, 1000);
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            {
                              const data = movieData;
                              const index = data.indexOf(oldData);
                              data[index] = newData;
                              dispatch({
                                type: "EDIT_MOVIE_DATA",
                                movieData: data
                              });
                            }
                            resolve();
                          }, 1000);
                        }),
                      onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            {
                              let data = movieData;
                              const index = data.indexOf(oldData);
                              data.splice(index, 1);
                              dispatch({
                                type: "DELETE_MOVIE_DATA",
                                movieData: data
                              });
                            }
                            resolve();
                          }, 1000);
                        })
                    }}
                  />
                </div>
              ) : (
                <Loading />
              )}
            </div>
          );
        }}
      </Context.Consumer>
    </ContextProvider>
  );
};

export default HomeView;
