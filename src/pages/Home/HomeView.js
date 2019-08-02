import React from "react";
import MaterialTable from "material-table";
import { ContextProvider, Context } from "./HomeState";
import Loading from "../../components/Loading";

const HomeView = props => {
  return (
    <ContextProvider>
      <Context.Consumer>
        {({ state, dispatch }) => {
          const newData = state.movieData;
          console.log("NEW DATA", newData);

          return (
            <div>
              {newData.length > 0 ? (
                <MaterialTable
                  title="Simple Movie List Table"
                  data={newData}
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
                  editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          //   {
                          //     /* const data = this.state.data;
                          //             data.push(newData);
                          //             this.setState({ data }, () => resolve()); */
                          //   }
                          resolve();
                        }, 1000);
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          //   {
                          //     /* const data = this.state.data;
                          //             const index = data.indexOf(oldData);
                          //             data[index] = newData;
                          //             this.setState({ data }, () => resolve()); */
                          //   }
                          resolve();
                        }, 1000);
                      }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          //   {
                          //     /* let data = this.state.data;
                          //             const index = data.indexOf(oldData);
                          //             data.splice(index, 1);
                          //             this.setState({ data }, () => resolve()); */
                          //   }
                          resolve();
                        }, 1000);
                      })
                  }}
                />
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
