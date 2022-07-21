<?php

namespace App\Http\Controllers;

use App\Models\Theatre;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

// Requests
use App\Http\Requests\Theatre\CreateRequest;
use App\Http\Requests\Theatre\UpdateRequest;

class TheatreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $theatres = Theatre::all();
        return Inertia::render('admin/theatre/Index', [
            'user' => Auth::user(),
            'theatres' => $theatres,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('admin/theatre/Create', [
            'user' => Auth::user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request)
    {
        $img = $request->file('image')->store('theatres');
        $theatre = Theatre::create([
            'name' => $request->name,
            'date' => $request->date,
            'image' => $img,
        ]);
        if ($theatre) {
            return redirect()->route('admin.theatre.index', ['message' => 'Theatre has been added successfully']);
        }
        return redirect()->route('admin.theatre.index', ['message' => 'Something went wrong']);
    }

    /**
     * Display the specified resource.
     *
     * @param Theatre $theatre
     * @return Response
     */
    public function show(Theatre $theatre)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Theatre $theatre
     * @return \Inertia\Response
     */
    public function edit(Theatre $theatre)
    {
        return Inertia::render('admin/theatre/Edit', [
            'user' => Auth::user(),
            'theatre' => $theatre,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request
     * @param Theatre $theatre
     * @return RedirectResponse
     */
    public function update(UpdateRequest $request, Theatre $theatre)
    {
        $img = $request->imageHidden;
        if($request->file('image')){
            Storage::delete($request->imageHidden);
            $img = $request->file('image')->store('theatres');
        }
        $updatedTheatre = $theatre->update([
            'name' => $request->name,
            'date' => $request->date,
            'image' => $img,
        ]);
        if ($updatedTheatre) {
            return redirect()->route('admin.theatre.index', ['message' => 'Theatre has been edited successfully']);
        }
        return redirect()->route('admin.theatre.index', ['message' => 'Something went wrong']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Theatre $theatre
     * @return RedirectResponse
     */
    public function destroy(Theatre $theatre)
    {
        if ($theatre->forceDelete()) {
            Storage::delete($theatre->image);
            return redirect()->route('admin.theatre.index', ['message' => 'Theatre has been deleted successfully']);
        }
        return redirect()->route('admin.theatre.index', ['message' => 'Something went wrong']);
    }
}
