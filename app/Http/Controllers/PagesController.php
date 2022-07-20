<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

// Models
use App\Models\Theatre;

class PagesController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function login()
    {
        return Inertia::render('Auth/Login');
    }

    /**
     * @return \Inertia\Response
     */
    public function home()
    {
        $theatres = Theatre::all();
        return Inertia::render('Home', [
            'user' => Auth::user(),
            'theatres' => $theatres,
        ]);
    }
}
