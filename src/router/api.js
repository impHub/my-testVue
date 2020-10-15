import request from "@/utils/router";

export function getList(params) {
  return request({
    url: "/posts",
    method: "get",
    params
  });
}

export function getListId(params) {
  return request({
    url: "/posts",
    method: "get",
    params
  });
}
