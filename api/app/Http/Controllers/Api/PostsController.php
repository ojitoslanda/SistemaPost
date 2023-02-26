<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{

    public function index()
    {
       $posts = Posts::all();
       return $posts;
    }

    public function store(Request $request)
    {
        $post = new Posts();
        $post->titulo = $request->titulo;
        $post->contenido = $request->contenido;

        $post->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Posts::find($id);
        return $post;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = Posts::findOrFail($request->id);
        $post->titulo = $request->titulo;
        $post->contenido = $request->contenido;

        $post->save();
        return $post;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Posts::destroy($id);
        return $post;
    }
}
