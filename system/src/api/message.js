import request from '@/utils/request'

// 留言
export function getMessages(page = 1, limit = 10) {
    return request.get("/api/message", {
        params: {
            page,
            limit,
        },
    });
}

export function delMessage(id) {
    return request.delete(`/api/message/${id}`);
}