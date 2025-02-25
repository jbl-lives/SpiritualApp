export interface Tool {
    id: number;
    name: string;
    category: string;
    info?: string; // Mark as optional
    imagePath: string;
}

export interface ToolResponse { // Define the interface
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    data: Tool[];
}