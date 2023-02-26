<?php

use App\Http\Controllers\Api\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


    Route::post('login', [AuthController::class,'login']);
    Route::group(['middleware'=>'api'], function(){
        Route::post('logout', [AuthController::class,'logout']);
        Route::post('refresh', [AuthController::class,'refresh']);
        Route::post('me', [AuthController::class,'me']);
    });

Route::controller(PostsController::class)->group(function(){
    Route::get('/posts', 'index');
    Route::post('/post', 'store');
    Route::get('/post/{id}', 'show');
    Route::put('/post/{id}', 'update');
    Route::delete('/post/{id}', 'destroy');
});

