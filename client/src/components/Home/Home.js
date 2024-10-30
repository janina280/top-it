import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../constants/apiConstants";
import {useAuth} from "../../AuthProvider";
import {DataGrid, GridActionsCellItem} from "@mui/x-data-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Home(props) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(100);
    const [filters, setFilters] = useState("");
    const auth = useAuth();

    const handleFilter = (filter) => {
        setFilters(filter);
    };

    const fetchData = () => {
        setIsLoading(true);
        fetch(API_BASE_URL + "/product/all", {
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        })
            .then(result => {
                if (result.status === 403) {
                    auth.value.logOut();
                }
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

    function addCart(id) {
        return undefined;
    }

    function addToWishlist(id) {
        return undefined;
    }

    const columns = [{field: 'id', headerName: 'ID', width: 90}, {
        field: 'name', headerName: 'Name', width: 150,
    }, {
        field: 'price', headerName: 'Price', type: 'number', width: 110,
    }, {
        field: 'stock', headerName: 'Stock', type: 'number', width: 110,
    }, {
        field: 'description',
        headerName: 'Description',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 300
    }, {
        field: 'specification', headerName: 'Specification', width: 300, sortable: false,
    },
        {
            field: 'actions',
            type: 'actions',
            width: 80,
            getActions: (params) => [
                //todo: fix icons
                <GridActionsCellItem
                    icon={<FontAwesomeIcon icon="fa-solid fa-cart-plus"/>}
                    label="Add to cart"
                    onClick={addCart(params.id)}
                />,
                <GridActionsCellItem
                    icon={<FontAwesomeIcon icon="fa-solid fa-heart"/>}
                    label="Add to wishlist"
                    onClick={addToWishlist(params.id)}
                />
            ],
        },]

    const filteredData = products.filter((item) => item.name.toLowerCase().includes(filters.toLowerCase()));

    return isLoading ? (<div>Loading... </div>) : (<>
        <div>
            <label htmlFor="name">
                Filter by name:
                <input
                    id="name"
                    type="text"
                    onChange={(e) => handleFilter(e.target.value)}
                />
            </label>
        </div>
        <div style={{height: "max-content", width: "max-content"}}>
            <DataGrid
                rows={filteredData}
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
                onPageSizeChange={handlePageSizeChange}/>
        </div>
    </>);
}

export default Home;
