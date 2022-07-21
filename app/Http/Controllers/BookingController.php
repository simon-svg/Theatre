<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $bookedTicketsCount = Booking::where('booked', 1)->count();
        $ticketsCount = Booking::all()->count();
        return Inertia::render('admin/booking/Index', [
            'user' => Auth::user(),
            'bookedTicketsCount' => $bookedTicketsCount,
            'ticketsCount' => $ticketsCount,
            'bookings' => Booking::orderBy('id', 'desc')
                ->leftJoin('users', 'user_id', "=", 'users.id')
                ->leftJoin('theatres', 'theatre_id', "=", 'theatres.id')
                ->select('users.*', 'bookings.id as booked_id', 'theatres.name as theatre_name',
                    'theatres.image', 'theatres.date', 'bookings.booked')
                ->get(),
        ]);
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        if ($request->booked_id) {
            Booking::findOrFail($request->booked_id)->forceDelete();
        }
        else {
            Booking::create([
                'user_id' => $request->user_id,
                'theatre_id' => $request->theatre_id
            ]);
        }
        return redirect()->route('home');
    }

    /**
     *
     * @return RedirectResponse
     */
    public function clearAll()
    {
        Booking::truncate();
        return redirect()->route('admin.theatre.index');
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function submit(Request $request){
        $booking = Booking::findOrFail($request->id);
        $booking->update([
            'booked' => $request->submitted === 1 ? 0 : 1,
        ]);
        return redirect()->route('admin.booking.index');
    }
}
