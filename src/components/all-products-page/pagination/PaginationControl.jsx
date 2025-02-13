import { Box, Pagination } from "@mui/material";

export default function PaginationControls({
    currentPage,
    totalPages,
    onPageChange,
}) {
    return (
        <Box
            className="pagination-container flex"
            sx={{
                mt: 5,
                justifyContent: "start",
                width: "100%",
                direction: "ltr",
            }}
        >
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={onPageChange}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            />
        </Box>
    );
}
