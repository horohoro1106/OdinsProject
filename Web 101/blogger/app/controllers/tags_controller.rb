class TagsController < ApplicationController
    def show
        @tag = Tag.find(params[:id])
        @tags = Tag.all
    end

    def index
      @tags = Tag.all
    end

    def destroy
        @tag= Tag.find(params[:id])
        flash.notice = "Tag '#{@tag.name}' Deleted!'"
        @tag.destroy
        redirect_to tags_path
      end
end
