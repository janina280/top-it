import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../constants/apiConstants";
import ProductList from "./ProductList";
import {useAuth} from "../../AuthProvider";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";

function Home(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(100);
    const auth = useAuth();

    const fetchData = () => {
        setIsLoading(true);
        fetch(API_BASE_URL + "/product/all", {
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        })
            .then(result => {
                if (result.status !== 200) {
                    throw new Error(result.statusMessage);
                }
                return result.json();
            })
            .then(result => {
                setProducts(result);
                setTotalItems([result].length);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setProducts([]);
                setTotalItems(0);
                console.log(error);
                props.showError(error);
            })
    }

    const handlePageChange = (params) => {
        if (params === pageNumber + 1) {
            setCurrentPage(params + 1);
            setPageNumber(pageNumber + 1);
        } else if (params === pageNumber - 1) {
            setCurrentPage(params - 1);
            setPageNumber(pageNumber - 1);
        }
    };
    const handlePageSizeChange = (newPageSize) => {
        setCurrentPage(1);
        setPageNumber(1);
        setPageSize(newPageSize); // Reset to the first page when pageSize changes
    };

    useEffect(() => {
        props.updateTitle("Home");
        fetchData()
    }, [currentPage, pageSize]);

    const columns = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160
        },
        {
            field: 'specification',
            headerName: 'Specification',
            width: 150,
            sortable: false,
            editable: true,
        },
    ];

    return isLoading ?
        (<div>Loading... </div>) :
        (
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    disableSelectionOnClick
                    pagination
                    paginationMode="server"
                    rowCount={totalItems}
                    onPageChange={(e) => {
                        handlePageChange(e);
                    }}
                    page={currentPage}
                    getRowId={(row) => row.id}
                    onPageSizeChange={handlePageSizeChange}
                    slots={{toolbar: GridToolbar}}/>
            </div>
        );
}

export default Home;
